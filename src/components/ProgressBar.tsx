import { Show } from 'solid-js'

interface ProgressBarProps {
  progress: number
  isProcessing: boolean
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <Show when={props.isProcessing}>
      <div class="mb-10">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <Show when={props.isProcessing} fallback={
              <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            }>
              <div class="animate-spin rounded-full h-5 w-5 border-2 border-violet-500 border-t-transparent"></div>
            </Show>
            <span class="text-sm font-semibold text-slate-700">
              {props.isProcessing ? 'AI処理中...' : '完了！'}
            </span>
          </div>
          <span class="text-sm font-bold text-violet-600">{props.progress}%</span>
        </div>
        <div class="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div
            class="bg-linear-to-r from-violet-500 to-fuchsia-500 h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
            style={`width: ${props.progress}%`}
          />
        </div>
      </div>
    </Show>
  )
}
