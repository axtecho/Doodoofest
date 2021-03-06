import ScheduleButton from "./ScheduleButton";

import programStyles from "/sass/modules/_Program.module.scss";

export default function ScheduleButtons(props) {
  return (
    <div className={programStyles.festival__buttons}>
      <ScheduleButton
        setFilteredM={props.setFilteredM}
        setFilteredJ={props.setFilteredJ}
        setFilteredV={props.setFilteredV}
        midgard={props.midgard}
        jotunheim={props.jotunheim}
        vanaheim={props.vanaheim}
        setDay={props.setDay}
        day={props.day}
        title="Monday"
      />
      <ScheduleButton
        setFilteredM={props.setFilteredM}
        setFilteredJ={props.setFilteredJ}
        setFilteredV={props.setFilteredV}
        midgard={props.midgard}
        jotunheim={props.jotunheim}
        vanaheim={props.vanaheim}
        setDay={props.setDay}
        day={props.day}
        title="Tuesday"
      />
      <ScheduleButton
        setFilteredM={props.setFilteredM}
        setFilteredJ={props.setFilteredJ}
        setFilteredV={props.setFilteredV}
        midgard={props.midgard}
        jotunheim={props.jotunheim}
        vanaheim={props.vanaheim}
        setDay={props.setDay}
        day={props.day}
        title="Wednesday"
      />
      <ScheduleButton
        setFilteredM={props.setFilteredM}
        setFilteredJ={props.setFilteredJ}
        setFilteredV={props.setFilteredV}
        midgard={props.midgard}
        jotunheim={props.jotunheim}
        vanaheim={props.vanaheim}
        setDay={props.setDay}
        day={props.day}
        title="Thursday"
      />
      <ScheduleButton
        setFilteredM={props.setFilteredM}
        setFilteredJ={props.setFilteredJ}
        setFilteredV={props.setFilteredV}
        midgard={props.midgard}
        jotunheim={props.jotunheim}
        vanaheim={props.vanaheim}
        setDay={props.setDay}
        day={props.day}
        title="Friday"
      />
      <ScheduleButton
        setFilteredM={props.setFilteredM}
        setFilteredJ={props.setFilteredJ}
        setFilteredV={props.setFilteredV}
        midgard={props.midgard}
        jotunheim={props.jotunheim}
        vanaheim={props.vanaheim}
        setDay={props.setDay}
        day={props.day}
        title="Saturday"
      />
      <ScheduleButton
        setFilteredM={props.setFilteredM}
        setFilteredJ={props.setFilteredJ}
        setFilteredV={props.setFilteredV}
        midgard={props.midgard}
        jotunheim={props.jotunheim}
        vanaheim={props.vanaheim}
        setDay={props.setDay}
        day={props.day}
        title="Sunday"
      />
    </div>
  );
}
