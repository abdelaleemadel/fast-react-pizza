import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button> Make priorty</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
