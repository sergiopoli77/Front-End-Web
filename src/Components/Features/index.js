import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "features");
    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeatures(data);
    });
  }, []);
  return (
    <section className="features-tiles section">
      <div className="container">
        <div className="features-tiles-inner section-inner">
          <div className="tiles-wrap">
            {features.map((item) => (
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="
													features-tiles-item-image
													mb-16
												"
                    >
                      <img
                        src="images/feature-tile-icon-01.svg"
                        alt="Feature tile icon 01"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">{item.title}</h4>
                    <p className="m-0 text-sm">{item.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;