import { copyFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const targetDir = 'public';

// Ensure target directory exists
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

console.log('Copying WASM and model files...\n');

let totalCopied = 0;

try {
  // Copy WASM files from onnxruntime-web
  console.log('1. Copying WASM files from onnxruntime-web...');
  const wasmSourceDir = 'node_modules/onnxruntime-web/dist';
  const wasmFiles = readdirSync(wasmSourceDir).filter(file => file.endsWith('.wasm'));
  
  wasmFiles.forEach(file => {
    const sourcePath = join(wasmSourceDir, file);
    const targetPath = join(targetDir, file);
    
    if (existsSync(sourcePath)) {
      copyFileSync(sourcePath, targetPath);
      console.log(`   ✓ ${file}`);
      totalCopied++;
    }
  });
  
  // Copy model data files from background-removal-data
  console.log('\n2. Copying model data files from background-removal-data...');
  const dataSourceDir = 'node_modules/@imgly/background-removal-data/dist';
  
  if (existsSync(dataSourceDir)) {
    const dataFiles = readdirSync(dataSourceDir);
    
    dataFiles.forEach(file => {
      const sourcePath = join(dataSourceDir, file);
      const targetPath = join(targetDir, file);
      
      copyFileSync(sourcePath, targetPath);
      totalCopied++;
    });
    console.log(`   ✓ Copied ${dataFiles.length} model chunk files`);
  } else {
    console.warn('   ⚠ Model data directory not found');
  }
  
  // Copy resources.json from background-removal
  console.log('\n3. Copying resources.json...');
  const resourcesSource = 'node_modules/@imgly/background-removal/dist/resources.json';
  const resourcesTarget = join(targetDir, 'resources.json');
  
  if (existsSync(resourcesSource)) {
    copyFileSync(resourcesSource, resourcesTarget);
    console.log(`   ✓ resources.json`);
    totalCopied++;
  } else {
    console.warn('   ⚠ resources.json not found');
  }
  
  console.log(`\n✅ Successfully copied ${totalCopied} files to ${targetDir}/`);
} catch (err) {
  console.error('\n❌ Error copying files:', err instanceof Error ? err.message : String(err));
  process.exit(1);
}
