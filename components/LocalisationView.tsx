import { AspectRatio } from "@mantine/core";


export default function LocalisationView() {


  return (
    <AspectRatio ratio={16 / 9}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1159.2939865006474!2d6.086437888968085!3d46.28439195405685!3m2!1i1024!2i768!4f13.1!2m1!1sEnzo%20mace!5e0!3m2!1sfr!2sfr!4v1723922892006!5m2!1sfr!2sfr" width="600" height="450" loading="lazy"></iframe>
    </AspectRatio>
  );
}