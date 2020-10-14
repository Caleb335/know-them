import una from "../images/unadey.jpeg"
import naija from "../images/9ja-wave.jpeg"
import obafemi from "../images/obafemi.jpeg"
import dude from "../images/dude-waving.jpeg"
import cuffed from "../images/man-cuffed.jpeg"
import lying from "../images/man-lying.jpeg"
import police from "../images/police.jpeg"
import donate from "../images/donate.svg"
import contact from "../images/contact.svg"
import join from "../images/joinProtests.svg"
import share from "../images/share.svg"

export const images = [
  {
    id: 0,
    src: naija,
  },
  {
    id: 1,
    src: dude,
  },
  {
    id: 2,
    src: obafemi,
  },
  {
    id: 3,
    src: cuffed,
  },
  {
    id: 4,
    src: lying,
  },
  {
    id: 5,
    src: police,
  },
  {
    id: 6,
    src: una,
  },
]

export const support = [
  {
    id: 0,
    title: "Donate",
    details:
      "You can donate funds to the help the protesters sustain the protest.  We promise complete  transparency in the disbursement of funds",
    icon: donate,
    action: "DONATE",
  },
  {
    id: 1,
    title: "Join the Protests",
    details:
      "You can join any protest in your area/state/country. Find out where.",
    icon: join,
    action: "Find a protest location",
  },
  {
    id: 2,
    title: "CONTACT YOUR SENATORS",
    details:
      "As Nigerians, it is our right to demand good governance from our leaders. If you would like to send an automated message/email to your state senator on the issue of SARS, click the button below.",
    icon: contact,
    action: "Send a message",
  },
  {
    id: 3,
    title: "Share ",
    details:
      "If you are unable to donate or join a live protest, join the online outcry. Use the hashtags #ENDSARS, #ENDSARSNOW, #EndSARSImmediately, #EndPoliceBrutality.",
    icon: share,
    action: "share",
  },
]
