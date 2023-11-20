import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

export type itemProps = {
  title: string;
  location: string;
  description: string;
  icon: string;
  date: string;
};

export default function TimelineElement({ item }: any) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "10px 10px 10px grey",
          border: "1px solid rgba(0,0,0, 0.05)",
          color: "black",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={item.date}
        dateClassName="text-zinc-500"
        icon={item.icon}
        iconStyle={{
          background: "white",
          fontSize: "1rem",
          color: "black",
        }}
        visible={inView}
      >
        <h4 className="font-semibold">{item.title}</h4>
        <h3 className="!mt-0 font-normal">{item.location}</h3>
        <p className="!mt-1 !font-normal text-zinc-700">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
