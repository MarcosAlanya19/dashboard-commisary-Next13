import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";

interface Props {
  children: JSX.Element
}

const LayoutAdmin = (props: Props) => {
  return (
    <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6'>
      <Sidebar />
      <div className='xl:col-span-5'>
        {/* <Header /> */}
        <div className='h-[90vh]'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
