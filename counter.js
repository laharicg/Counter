const Counter = ({ value }) => <p>{value}</p>;
      const CounterApp = ({}) => {
        const [counts, setCounts] = React.useState([0]);

        const increament = (index) =>
          setCounts((data) =>
            data.map((count, idx) => (idx === index ? count + 1 : count))
          );

        const decreament = (index) =>
          setCounts((data) =>
            data.map((count, idx) => (idx === index ? count - 1 : count))
          );

        const addCounter = () => setCounts((data) => data.concat([0]));
        const deleteCounter = (index) =>
          setCounts((data) => {
            return data.filter((count, idx) => {
              if (idx !== index) {
                console.log(idx);
                return idx + 1;
              }
            });
          });
        return (
          <div id="content">
            {counts.map((count, idx) => {
              return (
				  
                <div className="container">
				
                  <div key={idx} class="content">
				    <Counter value={count} />
                  </div>
                  <button
                    className="button"
                    onClick={() => increament(idx)}
                  >
                    Increament
                  </button>&nbsp;
                  <button
                    className="button"
                    onClick={() => decreament(idx)}
                  >
                    Decreament
                  </button>&nbsp;
                  <button
                    className="button"
                    onClick={() => deleteCounter(idx)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
			<br></br>
            <button className="button" onClick={addCounter}>
              Add Counter
            </button>
			<br></br>
			&nbsp;
          </div>
        );
      };
      ReactDOM.render(<CounterApp />, document.getElementById("root"));