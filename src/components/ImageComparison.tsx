import { Show } from 'solid-js'

interface ImageComparisonProps {
  originalImage: string | null
  processedImage: string | null
  isProcessing: boolean
}

export function ImageComparison(props: ImageComparisonProps) {
  return (
    <Show when={props.originalImage}>
      <div class="grid lg:grid-cols-2 gap-8 mb-8">
        {/* 元画像 */}
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-violet-500"></div>
            <h3 class="text-lg font-bold text-slate-800">元画像</h3>
          </div>
          <div class="relative bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg">
            <img
              src={props.originalImage ?? undefined}
              alt="元画像"
              class="w-full h-auto max-h-96 object-contain p-4"
            />
          </div>
        </div>

        {/* 処理後画像 */}
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-fuchsia-500"></div>
            <h3 class="text-lg font-bold text-slate-800">背景削除後</h3>
          </div>
          <div class="relative bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg min-h-[400px]">
            <Show
              when={props.processedImage}
              fallback={
                <div class="w-full h-96 flex items-center justify-center">
                  <Show
                    when={!props.isProcessing}
                    fallback={
                      <div class="text-center">
                        <div class="animate-spin rounded-full h-16 w-16 border-4 border-violet-200 border-t-violet-600 mx-auto mb-4"></div>
                        <p class="text-slate-600 font-medium">AI処理中...</p>
                      </div>
                    }
                  >
                    <p class="text-slate-400 font-medium">処理完了後に表示されます</p>
                  </Show>
                </div>
              }
            >
              {/* チェッカーボード背景 */}
              <div
                class="absolute inset-0"
                style="background-image: linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%); background-size: 20px 20px; background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"
              />
              <img
                src={props.processedImage ?? undefined}
                alt="背景削除後"
                class="relative w-full h-auto max-h-96 object-contain p-4"
              />
            </Show>
          </div>
        </div>
      </div>
    </Show>
  )
}
