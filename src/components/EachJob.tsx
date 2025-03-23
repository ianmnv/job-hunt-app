import { useAppSelector } from "../store/hooks/reduxHooks";

function EachJob() {
  const appState = useAppSelector((state) => state.application);

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
