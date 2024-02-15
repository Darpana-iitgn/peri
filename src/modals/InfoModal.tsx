import { useContext } from "react";
import { IonContent, IonModal, IonButton, IonCol, IonImg } from "@ionic/react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { CyclesContext, ThemeContext } from "../state/Context";
import {
  getAverageLengthOfCycle,
  getDayOfCycle,
  getPhase,
  getOvulationStatus,
  getPregnancyChance,
} from "../state/CalculationLogics";

function useRotate() {
  const cycles = useContext(CyclesContext).cycles;

  const lengthOfCycle = getAverageLengthOfCycle(cycles);
  const currentDay = getDayOfCycle(cycles);
  const phase = getPhase(cycles).title;

  switch (phase) {
    case "Menstrual phase":
      return (90 / cycles[0].periodLength) * (currentDay - 1);
    case "Follicular phase":
      return 105;
    case "Ovulation phase":
      return 155;
    case "Luteal phase":
      if (currentDay <= lengthOfCycle) {
        return 190 + (170 / (lengthOfCycle - 12)) * (currentDay - 12 - 1);
      } else return 345;
    default:
      return 0;
  }
}

interface PropsInfoModal {
  isOpen: boolean;
  setIsOpen: (newIsOpen: boolean) => void;
}

const InfoModal = (props: PropsInfoModal) => {
  const { t } = useTranslation();
  const cycles = useContext(CyclesContext).cycles;
  const theme = useContext(ThemeContext).theme;

  const lengthOfCycle = getAverageLengthOfCycle(cycles);
  const currentDay = getDayOfCycle(cycles);
  const ovulationStatus = getOvulationStatus(cycles);
  const pregnancyChance = getPregnancyChance(cycles);

  const phase = getPhase(cycles);

  const rotate = useRotate();

  return (
    <IonModal
      id="info-modal"
      backdropDismiss={false}
      isOpen={props.isOpen}
    >
      <IonContent color={`transparent-${theme}`}>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          // navigation={true} // NOTE: for web tests
          scrollbar={true}
        >
          <SwiperSlide>
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  color: `var(--ion-color-dark-${theme})`,
                  marginBottom: "24px",
                }}
              >
                {`${t("Days", {
                  postProcess: "interval",
                  count: 1, // NOTE: to indicate which day is in the account, you need to write the day as if in the singular
                })} `}
                {cycles.length === 1 ? (
                  currentDay
                ) : (
                  <>
                    {currentDay}/{lengthOfCycle}
                  </>
                )}
              </p>
              <ul style={{ listStyleType: "none" }}>
                <li
                  style={{
                    fontSize: "16px",
                    color: `var(--ion-color-text-${theme})`,
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      color: `var(--ion-color-less-dark-${theme})`,
                      fontWeight: "bold",
                    }}
                  >
                    {phase.title}
                  </span>
                  <span> {t("is current phase of cycle")}</span>
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: `var(--ion-color-text-${theme})`,
                    marginBottom: "20px",
                  }}
                >
                  <span>{t("Ovulation")}</span>
                  <span
                    style={{
                      color: `var(--ion-color-less-dark-${theme})`,
                      fontWeight: "bold",
                    }}
                  >
                    {` ${ovulationStatus}`}
                  </span>
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    color: `var(--ion-color-text-${theme})`,
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      color: `var(--ion-color-less-dark-${theme})`,
                      fontWeight: "bold",
                    }}
                  >
                    {pregnancyChance}
                  </span>
                  <span> {t("chance of getting pregnant")}</span>
                </li>
              </ul>
              <div className="container">
                <IonImg
                  className="cycleImg"
                  src={`../../assets/info/${theme}Cycle.png`}
                />
                <IonImg
                  className="pointerImg"
                  src={`../../assets/info/pointer.png`}
                  style={{
                    transform: `rotate(${rotate}deg)`,
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  color: `var(--ion-color-dark-${theme})`,
                  marginBottom: "24px",
                }}
              >
                {t("Hormone levels")}
              </p>
              <ul style={{ listStyleType: "none" }}>
                <li
                  style={{
                    fontSize: "16px",
                    color: `var(--ion-color-text-${theme})`,
                    marginBottom: "20px",
                    lineHeight: "1.8",
                    maxWidth: "300px",
                    textAlign: "justify",
                  }}
                >
                  {` ${phase.description}`}
                </li>
              </ul>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  color: `var(--ion-color-dark-${theme})`,
                  marginBottom: "24px",
                }}
              >
                {t("Frequent symptoms")}
              </p>
              <ul style={{ listStyleType: "none" }}>
                {phase.symptoms.map((item, idx) => (
                  <li
                    style={{
                      fontSize: "16px",
                      color: `var(--ion-color-text-${theme})`,
                      marginBottom: "20px",
                      maxWidth: "300px",
                    }}
                    key={idx}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <IonCol>
                <IonButton
                  className="main"
                  color={`dark-${theme}`}
                  onClick={() => props.setIsOpen(false)}
                >
                  OK
                </IonButton>
              </IonCol>
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonModal>
  );
};

export default InfoModal;
