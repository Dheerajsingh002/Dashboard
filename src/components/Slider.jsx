
import "./Slider.css";

const Slider = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c7 bg-teal-100 rounded-md">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text"><b>Customers</b></h3>
            <p>Customers that Buy Products</p>
        </div>
        <div className="grid-c7-content">
            <div className="progress-bar">
                <div className="percent">
                    <svg>
                        <circle cx="105" cy="105" r="50"></circle>
                        <circle cx="105" cy="105" r="50"></circle>
                    </svg>
                    <div className="number">
                        <h1>65<span>%</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider