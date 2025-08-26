export default function AboutPage() {
  const formCount = 5; // 원하는 개수만 설정

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-700 mb-8">
        This is a simple Next.js blog project using Tailwind CSS.
      </p>

      {/* formCount 만큼 반복 */}
      {Array.from({ length: formCount }).map((value, index) => {
        return (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">폼 {index + 1}</h3>
            <div className="space-y-3">
              <input type="text" placeholder="이름" className="w-full p-2 border rounded" />
              <input type="email" placeholder="이메일" className="w-full p-2 border rounded" />
              <textarea placeholder="메시지" className="w-full p-2 border rounded h-20" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                제출
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
