import { IoIosArrowForward } from "react-icons/io";
import * as api from "../../services/api";
import renderToast from "../../utils/renderToast";
import {
  GoBackIcon,
  Title,
  WeekDay,
  CheckBox,
  Schedule,
  Button,
  modalStyles,
} from "./style";
import {
  scheduleArray as rangeInputValues,
  weekdays,
} from "../../data/BusinessHoursModal";
import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import handleApiErrors from "../../utils/handleApiErrors";
import Modal from "../Modal";

export default function BusinessHoursModal({
  businessHoursModalIsOpen,
  setBusinessHoursModalIsOpen,
  schedulesArray,
  renderPage,
}) {
  const { token } = useUserContext();

  const [selectionTab, setSelectionTab] = useState(true);
  const [selectedWeekday, setSelectedWeekday] = useState();

  const [showSchedules, setShowSchedules] = useState();
  const [startTime, setStartTime] = useState("9:00");
  const [endTime, setEndTime] = useState("20:00");

  function handleSelection(weekday) {
    setSelectionTab(false);
    setSelectedWeekday(weekday);
    setShowSchedules(weekday.isOpen);
    if (weekday?.schedule?.length !== 0) {
      setStartTime(weekday.schedule[0]);
      setEndTime(weekday.schedule[weekday.schedule.length - 1]);
    } else {
      setStartTime("9:00");
      setEndTime("20:00");
    }
  }

  function closeModal() {
    document.body.style.overflow = "unset";
    setBusinessHoursModalIsOpen(false);
    setSelectionTab(true);
    setSelectedWeekday();
  }

  async function editSchedule() {
    const response = await api.editSchedule(token, selectedWeekday.weekId, {
      startTime,
      endTime,
      isOpen: showSchedules,
    });

    if (response.status === 200) {
      setSelectionTab(true);
      renderPage();
      renderToast("success", "Horário editado!");
      return;
    }

    handleApiErrors(response);
    return;
  }

  return (
    <Modal
      isOpen={businessHoursModalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={modalStyles}
    >
      {selectionTab && (
        <>
          <Title>Horário de funcionamento</Title>
          {schedulesArray?.map((weekday) => {
            return (
              <WeekDay
                key={weekday?._id}
                onClick={() => handleSelection(weekday)}
              >
                <p>{weekdays[weekday?.weekId]}</p>
                {weekday?.isOpen ? (
                  <p>
                    {`${weekday?.schedule[0]} - ${
                      weekday?.schedule[weekday?.schedule.length - 1]
                    }`}
                  </p>
                ) : (
                  <p>Fechado</p>
                )}
                <IoIosArrowForward className="arrow-icon" />
              </WeekDay>
            );
          })}
        </>
      )}

      {!selectionTab && (
        <>
          <GoBackIcon
            onClick={() => {
              setSelectionTab(true);
              setSelectedWeekday();
            }}
          />
          <Title>{weekdays[selectedWeekday?.weekId]}</Title>

          <CheckBox>
            <p>Fechar dia:</p>
            <input
              type="checkbox"
              onChange={(e) => setShowSchedules(!e.target.checked)}
              checked={!showSchedules}
            />
          </CheckBox>

          {showSchedules && (
            <>
              <Schedule>
                <p>{`Abertura: ${startTime}`}</p>
                <input
                  type="range"
                  min="0"
                  max={rangeInputValues.length - 1}
                  placeholder="Duração"
                  onChange={(e) =>
                    setStartTime(rangeInputValues[e.target.value])
                  }
                  value={rangeInputValues.indexOf(startTime)}
                  required
                />
              </Schedule>
              <Schedule>
                <p>{`Encerramento: ${endTime}`}</p>
                <input
                  type="range"
                  min="0"
                  max={rangeInputValues.length - 1}
                  placeholder="Duração"
                  onChange={(e) => setEndTime(rangeInputValues[e.target.value])}
                  value={rangeInputValues.indexOf(endTime)}
                  required
                />
              </Schedule>
            </>
          )}
          <Button onClick={editSchedule}>Salvar</Button>
        </>
      )}
    </Modal>
  );
}
