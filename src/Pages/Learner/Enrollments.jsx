import { Suspense, useContext, useEffect } from "react";
import EnrollmentTableRow from "../../Components/LearnerComponents/EnrollmentTableRow";
import { AuthContext } from "../../AuthContext/AuthContext";
import useSecureAPI from "../../Hooks/useSecureAPI";
import Loader from "../../Components/SharedComponents/Loader";
import LearnerTable from "../../Components/LearnerComponents/LearnerTable";
import { Helmet } from "react-helmet";

const Enrollments = () => {
  const { user } = useContext(AuthContext);
  const { getDataByUID } = useSecureAPI();

  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-10 md:px-8">
      <Helmet>
        <title>My Enrollments | LearnOsphere</title>
      </Helmet>
      <div className="justify-between items-center md:flex">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold">My Enrollments</h2>
        </div>
      </div>
      <div className="mt-12 shadow-sm border border-blue-600 rounded-lg overflow-x-auto">
        <Suspense fallback={<Loader />}>
          <LearnerTable getDataByUID={getDataByUID("enrollments", user.uid)} />
        </Suspense>
      </div>
    </div>
  );
};

export default Enrollments;
