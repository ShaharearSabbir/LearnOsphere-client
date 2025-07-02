import { Suspense, useContext } from "react";
import EnrollmentTableRow from "../../Components/LearnerComponents/EnrollmentTableRow";
import { AuthContext } from "../../AuthContext/AuthContext";
import useSecureAPI from "../../Hooks/useSecureAPI";
import Loader from "../../Components/SharedComponents/Loader";
import LearnerTable from "../../Components/LearnerComponents/LearnerTable";
import { Helmet } from "react-helmet";
import usePageTop from "../../Hooks/usePageTop";
import OnTitleBar from "../../Components/SharedComponents/OnTitleBar";
import Title from "../../Components/SharedComponents/Title";

const Enrollments = () => {
  usePageTop();
  const { user } = useContext(AuthContext);
  const { getDataByUID } = useSecureAPI();

  return (
    <div className="container mx-auto px-4 mb-10 md:px-8 min-h-screen">
      <OnTitleBar>My Enrollments</OnTitleBar>
      <Title
        secondary="My Enrollments"
        title="My Enrolled"
        utitle="Courses"
        center={true}
      />
      <div className="justify-between items-center md:flex"></div>
      <div className="mt-12 shadow-sm border border-blue-600 rounded-lg overflow-x-auto">
        <Suspense fallback={<Loader />}>
          <LearnerTable getDataByUID={getDataByUID("enrollments", user.uid)} />
        </Suspense>
      </div>
    </div>
  );
};

export default Enrollments;
