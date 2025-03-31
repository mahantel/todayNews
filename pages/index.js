import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  
  // Sample card news data
  const cardNewsData = [
    {
      id: 1,
      title: "오늘의 주요 뉴스",
      content: "카드뉴스 첫 번째 페이지입니다. 좌우로 스와이프하여 다음 카드를 확인하세요.",
      imageUrl: "/placeholder.jpg",
    },
    {
      id: 2,
      title: "기술 트렌드",
      content: "최신 기술 트렌드에 대한 소식입니다. AI와 빅데이터가 주목받고 있습니다.",
      imageUrl: "/placeholder.jpg",
    },
    {
      id: 3,
      title: "경제 소식",
      content: "오늘의 경제 동향과 주요 지표에 대한 분석입니다.",
      imageUrl: "/placeholder.jpg",
    },
    {
      id: 4,
      title: "건강 정보",
      content: "건강한 생활을 위한 팁과 정보를 제공합니다.",
      imageUrl: "/placeholder.jpg",
    },
  ];
  
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === cardNewsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? cardNewsData.length - 1 : prevIndex - 1
    );
  };

  const goToCard = (index) => {
    setCurrentCardIndex(index);
    setShowPreview(false);
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const currentCard = cardNewsData[currentCardIndex];

  return (
    <>
      <Head>
        <title>Numera Card News</title>
        <meta name="description" content="Modern card news web application" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen bg-[#f9fafb] font-['Inter',sans-serif]">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="text-xl font-bold text-[#2563eb]">Numera News</div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#2563eb]">Home</button>
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#2563eb]">About</button>
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#2563eb]">Contact</button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Reverted Hero Section */}
        <div className="bg-[#2563eb] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Today's Card News</h1>
            <p className="text-xl opacity-90">Stay informed with our curated news cards</p>
          </div>
        </div>
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
            {/* Card Header with Progress Bar */}
            <div className="bg-gray-50 px-6 py-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Card {currentCardIndex + 1} of {cardNewsData.length}</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{Math.round(((currentCardIndex + 1) / cardNewsData.length) * 100)}%</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#2563eb] rounded-full" 
                    style={{ width: `${((currentCardIndex + 1) / cardNewsData.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-6">
              <div className="relative h-64 bg-gray-200 rounded-lg mb-6">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Card Image {currentCardIndex + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentCard.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{currentCard.content}</p>
              
              {/* Card Navigation */}
              <div className="flex justify-between items-center pt-4 border-t">
                <button 
                  onClick={prevCard}
                  className="px-5 py-2.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition font-medium"
                >
                  Previous
                </button>
                
                <button
                  onClick={togglePreview}
                  className="px-5 py-2.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition font-medium"
                >
                  {showPreview ? "Hide Preview" : "Show Preview"}
                </button>
                
                <button 
                  onClick={nextCard}
                  className="px-5 py-2.5 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition font-medium"
                >
                  Next
                </button>
              </div>
            </div>
            
            {/* Preview Section */}
            {showPreview && (
              <div className="p-6 border-t bg-gray-50">
                <h3 className="text-lg font-semibold mb-4">All Cards Preview</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cardNewsData.map((card, index) => (
                    <div 
                      key={card.id}
                      onClick={() => goToCard(index)}
                      className={`
                        cursor-pointer rounded-lg overflow-hidden transition transform hover:scale-105
                        ${index === currentCardIndex ? 'ring-2 ring-[#2563eb]' : 'hover:shadow-md'}
                      `}
                    >
                      <div className="h-24 bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-500">Card {index + 1}</span>
                      </div>
                      <div className="p-3 bg-white">
                        <h4 className="font-medium text-sm truncate">{card.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Numera News</h3>
                <p className="text-gray-400">Delivering the latest news in a modern card format.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                <p className="text-gray-400 mb-4">Stay updated with our latest news</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
                  />
                  <button className="bg-[#2563eb] px-4 py-2 rounded-r-lg hover:bg-[#1d4ed8] transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2023 Numera Card News. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
