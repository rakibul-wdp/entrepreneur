import AuthForm from "@/components/auth/auth-form";

const page = () => {
  return (
    <div className="bg-[#024044] h-screen flex justify-center items-center">
      <AuthForm type="sign-up" />
    </div>
  );
};

export default page;
