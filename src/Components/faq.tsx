import React from 'react'

export const Faq = () => {
    const FaqItems = [
        { id: 1, question: '10 Wildly Successful Blogs That Earn Outlandish Incomes' },
        { id: 2, question: '10 Wildly Successful Blogs That Earn Outlandish Incomes' },
        { id: 3, question: '10 Wildly Successful Blogs That Earn Outlandish Incomes' },
        { id: 4, question: '10 Wildly Successful Blogs That Earn Outlandish Incomes' },
        { id: 5, question: '10 Wildly Successful Blogs That Earn Outlandish Incomes' }
      ];
  return (
    <div className='max-w-6xl mx-auto px-4 py-16'>        
    {/* Faq Section */}
    <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Frequently Asked Questions</h2>
    
    <div className="bg-gray-50 rounded-lg overflow-hidden mb-10">
      {FaqItems.map((item) => (
        <details key={item.id} className="group  border-gray-500 border-1 m-1">
          <summary className="flex items-center justify-between cursor-pointer p-4 bg-linear-to-r from-green-50 to-yellow-100">
            <span className="text-sm font-medium text-green-800">{item.question}</span>
            <span className="text-green-600 rotate-0 group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </summary>
          <div className="p-4 bg-white/80 shadow-lg">
            <p className="text-sm text-gray-600">
              This is the answer to the frequently asked question. The content expands when clicked and collapses when clicked again.
            </p>
          </div>
        </details>
      ))}
    </div></div>
  )
}
