import { AspectRatio } from "@mantine/core";


export default function LocalisationView() {


  return (
    <AspectRatio ratio={16 / 9}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42290.721193961035!2d-2.7657075!3d48.5108043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e1d4129562b03%3A0x40ca5cd36e62a40!2s22000%20Saint-Brieuc%2C%20France!5e0!3m2!1sfr!2sca!4v1727722110079!5m2!1sfr!2sca" width="600" height="450"  loading="lazy" ></iframe>
    </AspectRatio>
  );
}