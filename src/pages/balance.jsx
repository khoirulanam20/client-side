import Card from "../components/Element/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
    {/* top content start*/}
    <div className="md:grid md:grid-cols-3 md:gap-x-6">
      <Card title="Balances" />
      <Card title="&nbsp;" />
      <Card title="&nbsp;" /> 
      <Card title="&nbsp;" />
      <Card title="&nbsp;" />
      <Card title="&nbsp;" />
    </div>
    {/* bottom content end*/}
  </MainLayout>
  );
};

export default BalancePage;