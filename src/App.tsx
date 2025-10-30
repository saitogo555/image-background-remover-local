import { createSignal, Show } from "solid-js";
import { removeBackground } from "@imgly/background-removal";
import type { Component } from "solid-js";
import { Header } from "./components/Header";
import { FileUploadArea } from "./components/FileUploadArea";
import { ProgressBar } from "./components/ProgressBar";
import { ImageComparison } from "./components/ImageComparison";
import { ActionButtons } from "./components/ActionButtons";

const App: Component = () => {
  const [originalImage, setOriginalImage] = createSignal<string | null>(null);
  const [processedImage, setProcessedImage] = createSignal<string | null>(null);
  const [isProcessing, setIsProcessing] = createSignal(false);
  const [progress, setProgress] = createSignal(0);
  const [isDragging, setIsDragging] = createSignal(false);

  const processFile = async (file: File) => {
    // 元画像を表示
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result && typeof e.target.result === "string") {
        setOriginalImage(e.target.result);
        setProcessedImage(null);
      }
    };
    reader.readAsDataURL(file);

    // 背景削除処理
    setIsProcessing(true);
    setProgress(0);

    try {
      const imageBlob = await removeBackground(file, {
        model: "isnet",
        progress: (key: string, current: number, total: number) => {
          const percent = Math.round((current / total) * 100);
          setProgress(percent);
        },
      });

      const url = URL.createObjectURL(imageBlob);
      setProcessedImage(url);
      setIsProcessing(false);

      // 処理完了後、少し待ってからプログレスバーを非表示
      setTimeout(() => {
        setProgress(0);
      }, 800);
    } catch (error) {
      console.error("背景削除エラー:", error);
      alert("背景削除に失敗しました。別の画像で試してください。");
      setIsProcessing(false);
      setProgress(0);
    }
  };

  const handleFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) return;
    await processFile(file);
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer?.files[0];
    if (file && file.type.startsWith("image/")) {
      await processFile(file);
    }
  };

  const handleDownload = () => {
    const url = processedImage();
    if (!url) return;

    const a = document.createElement("a");
    a.href = url;
    a.download = "background-removed.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleReset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setIsProcessing(false);
    setProgress(0);
  };

  return (
    <div class="min-h-screen bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <Header />

        <div class="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
          <FileUploadArea
            isDragging={isDragging()}
            isProcessing={isProcessing()}
            onFileChange={handleFileUpload}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          />

          <ProgressBar progress={progress()} isProcessing={isProcessing()} />

          <ImageComparison
            originalImage={originalImage()}
            processedImage={processedImage()}
            isProcessing={isProcessing()}
          />

          <Show when={originalImage()}>
            <ActionButtons
              processedImage={processedImage()}
              isProcessing={isProcessing()}
              onDownload={handleDownload}
              onReset={handleReset}
            />
          </Show>
        </div>

        {/* フッター */}
        <div class="mt-12 text-center">
          <p class="text-sm text-slate-500 mb-2">
            Powered by @imgly/background-removal
          </p>
          <p class="text-xs text-slate-400">高精度AIモデル (isnet) を使用</p>
        </div>
      </div>
    </div>
  );
};

export default App;
