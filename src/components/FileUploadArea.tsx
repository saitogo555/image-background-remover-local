interface FileUploadAreaProps {
  isDragging: boolean
  isProcessing: boolean
  onFileChange: (event: Event) => void
  onDragOver: (event: DragEvent) => void
  onDragLeave: (event: DragEvent) => void
  onDrop: (event: DragEvent) => void
}

export function FileUploadArea(props: FileUploadAreaProps) {
  return (
    <div class="mb-10">
      <label class="block">
        <div 
          class={`border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            props.isDragging 
              ? 'border-violet-500 bg-violet-50 scale-105' 
              : props.isProcessing
              ? 'border-slate-300 bg-slate-50 cursor-not-allowed opacity-60'
              : 'border-slate-300 bg-linear-to-br from-slate-50 to-slate-100/50 hover:border-violet-400 hover:bg-violet-50/50 cursor-pointer'
          }`}
          onDragOver={props.onDragOver}
          onDragLeave={props.onDragLeave}
          onDrop={props.onDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={props.onFileChange}
            class="hidden"
            disabled={props.isProcessing}
          />
          <div class={`mx-auto w-20 h-20 mb-6 rounded-2xl bg-linear-to-br from-violet-100 to-fuchsia-100 flex items-center justify-center ${props.isProcessing ? 'opacity-50' : ''}`}>
            <svg
              class="h-10 w-10 text-violet-600"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="text-lg font-semibold text-slate-700 mb-2">
            {props.isDragging ? '画像をドロップ' : 'クリックまたはドラッグ&ドロップ'}
          </p>
          <p class="text-sm text-slate-500">
            PNG, JPG, WEBP形式に対応（最大10MB）
          </p>
        </div>
      </label>
    </div>
  )
}
