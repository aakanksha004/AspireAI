// import ViewCoverLetter from "@/components/ViewCoverLetter";

import ViewCoverLetter from "../_components/view-cover-letter";

export default function Page({ params }) {
  return <ViewCoverLetter id={params.id} />;
}

