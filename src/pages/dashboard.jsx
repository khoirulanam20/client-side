import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Element/Card";
import CardBill from "../components/Fragment/Dashboard/Cardbill";
import CardExpenseBreakdown from "../components/Fragment/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/Fragment/Dashboard/CardTransaction";


const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card title="Goals" />
        <CardBill />
        <CardTransaction />
        <Card variant="md:col-span-2" title="Statistics" />
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;