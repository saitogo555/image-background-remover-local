export function Header() {
  return (
    <div class="text-center mb-12">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-2xl mb-6 shadow-lg">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h1 class="text-5xl font-bold bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
        AI背景削除
      </h1>
      <p class="text-lg text-slate-600 max-w-2xl mx-auto">
        最先端のAIで画像の背景を瞬時に削除。ドラッグ&ドロップまたはクリックで簡単に始められます
      </p>
    </div>
  )
}
