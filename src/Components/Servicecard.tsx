// Reusable ServiceCard component
export const ServiceCard = ({ title, description, iconPlaceholder, gradientDirection }) => {
    // Dynamic gradient based on direction (left-to-right or right-to-left)
    const gradientClass = 
      gradientDirection === 'rtl' 
        ? 'bg-gradient-to-r from-blue-100/80 to-green-100/80' 
        : 'bg-gradient-to-l from-blue-100/80 to-green-100/80';
    
    return (
      <div className={`rounded-xl p-6 ${gradientClass} transition-transform hover:scale-105`}>
        <div className="h-12 w-12 mb-4">
          {/* Placeholder for icon - you'll add the actual image */}
          <div className="h-full w-full bg-blue-200/50 rounded-md flex items-center justify-center">
            {iconPlaceholder}
          </div>
        </div>
        <h3 className="text-blue-800 font-medium mb-2">{title}</h3>
        <p className="text-sm text-blue-600/70">{description}</p>
      </div>
    );
  };