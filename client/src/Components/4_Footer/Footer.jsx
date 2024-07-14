import React, { Fragment } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FaGlobe } from "react-icons/fa";
import { MdSpeakerPhone } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";
import WinningInfoPage from "./WinningInfoPage";
import Details from "./Details";

const Footer = () => {
  return (
    <Fragment>
      <WinningInfoPage />
      <Details />
      <div className="w-[95%] bg-white p-10 mx-auto my-10">
        <Accordion type="" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <FaGlobe
                style={{ fontSize: "25px" }}
                className="text-green-500"
              />
              <p>Language</p>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <MdSpeakerPhone
                style={{ fontSize: "25px" }}
                className="text-green-500"
              />
              Notification
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <RiCustomerService2Fill
                style={{ fontSize: "25px" }}
                className="text-green-500"
              />
              24/7 Customer service
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <FaBookBookmark
                style={{ fontSize: "25px" }}
                className="text-green-500"
              />
              Beginner's Guide
            </AccordionTrigger>
            <AccordionContent>
              <button className="bg-red-300">Hello World</button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <FaBox style={{ fontSize: "25px" }} className="text-green-500" />
              About us
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Fragment>
  );
};

export default Footer;
