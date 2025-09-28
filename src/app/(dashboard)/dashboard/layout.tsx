const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>side bar</div>
      {children}
    </div>
  );
};

export default DashboardLayout;
