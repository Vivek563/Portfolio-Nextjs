import Form from "../../Atoms/Form/Form";
import SleepingPanda from "../../Atoms/SleepingPanda/SleepingPanda";

function Connect() {
     return (
          <>
               <section style={{ background: "#fffaeb" }} className="section blog ">
                    <div className="section-title">
                         <h2>Connect</h2>
                         <div className="underline"></div>
                    </div>
                    <div className="pandaForm">
                         <SleepingPanda />
                         <Form />
                    </div>
               </section>
          </>
     );
}

export default Connect;
