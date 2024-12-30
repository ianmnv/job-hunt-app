import { useContext } from "react";
import MainContext from "../MainContext";

function EachJob() {
  const appState = useContext(MainContext);

  return (
    <aside>
      {appState?.map((el) => {
        return (
          <div key={el.id}>
            <h2>
              {el.title} at {el.company}
            </h2>
            <p>in {el.country}</p>
            <p>on {el.applicationDate}</p>
            <span>{el.status}</span>
            <input type="button" value="Edit" />
            <input type="button" value="Delete" />
          </div>
        );
      })}
    </aside>
  );
}

export default EachJob;
