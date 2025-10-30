interface ActionButtonsProps {
  processedImage: string | null
  isProcessing: boolean
  onDownload: () => void
  onReset: () => void
}

export function ActionButtons(props: ActionButtonsProps) {
  return (
    <div class="flex flex-wrap gap-4 justify-center">
      <button
        onClick={props.onDownload}
        disabled={!props.processedImage || props.isProcessing}
        class="group relative px-8 py-4 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg"
      >
        <span class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          ダウンロード
        </span>
      </button>
      <button
        onClick={props.onReset}
        disabled={props.isProcessing}
        class="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-300 hover:border-violet-400 hover:bg-violet-50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg"
      >
        <span class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          リセット
        </span>
      </button>
    </div>
  )
}
