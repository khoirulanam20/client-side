import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Element/Card";
import Button from "../components/Element/Button";
import {
  EmojiEvents,
  Adjust,
  Home,
  Restaurant,
  DirectionsCar,
  Theaters,
  ShoppingBag,
  MoreHoriz,
  KeyboardArrowDown
} from '@mui/icons-material';

const GoalsPage = () => {
  const SavingsGoalContent = () => (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Savings Goal</h2>
        <div className="flex items-center border rounded-md p-2 cursor-pointer">
          <span className="text-sm">01 May - 31 May</span>
          <KeyboardArrowDown className="text-gray-500 ml-1" />
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
            <EmojiEvents className="text-primary" />
          </div>
          <div>
            <p className="text-gray-600">Target Achieved</p>
            <p className="font-bold text-xl">$12,500</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
            <Adjust className="text-primary" />
          </div>
          <div>
            <p className="text-gray-600">This month Target</p>
            <p className="font-bold text-xl">$20,000</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span>$0</span>
          <span>$20k</span>
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full w-[60%]"></div>
        </div>
        <p className="text-center mt-2 font-bold">12K</p>
      </div>

      <Button variant="bg-white border border-primary text-primary w-full">
        Adjust Goal
      </Button>
    </>
  );

  const SavingSummaryContent = () => {
    // Data dummy untuk grafik
    const chartData = {
      labels: ['May 01', 'May 05', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
      thisMonth: [2000, 3500, 2800, 4000, 3200, 4500, 4200],
      lastMonth: [1800, 3000, 2500, 3800, 3000, 4000, 3800]
    };

    return (
      <>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Saving Summary</h2>
          <div className="flex items-center border rounded-md p-2 cursor-pointer">
            <span className="text-sm">May 2024</span>
            <KeyboardArrowDown className="text-gray-500 ml-1" />
          </div>
        </div>
        
        <div className="flex mb-4">
          <div className="flex items-center mr-6">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-sm">This month</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-sm">Same period last month</span>
          </div>
        </div>

        <div className="h-48 bg-gray-50 rounded-lg p-4">
          {/* Area grafik */}
          <div className="relative h-full">
            {/* Y-axis labels */}
            <div className="absolute top-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>$5000</span>
              <span>$2000</span>
              <span>$500</span>
              <span>$0</span>
            </div>
            
            {/* Grafik area */}
            <div className="relative h-full">
              <svg className="px-8 w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                {/* Area untuk bulan ini */}
                <path
                  d="M0 150 L30 100 L60 120 L90 80 L120 110 L150 70 L180 90 L210 60 L240 80 L270 50 L300 70 L300 150 Z"
                  fill="rgba(41, 157, 145, 0.1)"
                  stroke="#299D91"
                  strokeWidth="2"
                />
                
                {/* Area untuk bulan lalu */}
                <path
                  d="M0 160 L30 110 L60 130 L90 90 L120 120 L150 80 L180 100 L210 70 L240 90 L270 60 L300 80"
                  fill="none"
                  stroke="#E8E8E8"
                  strokeWidth="2"
                  strokeDasharray="4"
                />
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="absolute px-8 bottom-0 w-full flex justify-between text-xs text-gray-500 mt-2">
              {chartData.labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  const categories = [
    { title: "Housing", icon: <Home />, amount: "$250.00" },
    { title: "Food", icon: <Restaurant />, amount: "$250.00" },
    { title: "Transportation", icon: <DirectionsCar />, amount: "$250.00" },
    { title: "Entertainment", icon: <Theaters />, amount: "$250.00" },
    { title: "Shopping", icon: <ShoppingBag />, amount: "$250.00" },
    { title: "Others", icon: <MoreHoriz />, amount: "$250.00" }
  ];

  return (
    <MainLayout type="goals">
      <div className="p-6">
        <div className="md:grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card 
              desc={<SavingsGoalContent />} 
              variant="h-full"
            />
          </div>
          <div className="md:col-span-2">
            <Card 
              desc={<SavingSummaryContent />} 
              variant="h-full"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Expenses Goals by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.title}
                desc={
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary">{category.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{category.title}</h3>
                        <p className="text-xl font-bold">{category.amount}</p>
                      </div>
                    </div>
                    <Button variant="bg-white border border-primary text-primary w-full">
                      Adjust
                    </Button>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GoalsPage;