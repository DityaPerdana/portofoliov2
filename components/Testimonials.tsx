import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Jujur menurut saya anda dalam mengcoding sudah cukup bagus. Bahkan mampu membuat para sepuh sepuh di setiap jurusan terpukau.",
      name: "Athar Delano Shelby",
      designation: "Artist",
      src: "/Athar.webp",
    },
    {
      quote: "web nya bagus, smooth, mulus, menikmati, biautipul",
      name: "Ramses Corda",
      designation: "Jack of All Trades",
      src: "/ramses.webp",
    },
    {
      quote:
        "Yahh Raditya Alfarisi, seorang remaja yang saat ini menginjak kelas 10 di Sekolah kejuruan. Merupakan sosok yang tekun dan pantang menyerah, keyakinannya pada diri sendiri dibuktikan pada usahanya dalam menguasai dunia pemrograman diusia muda. Namun, dia merupakan seseorang yang penyendiri, hal tersebut membuatnya sulit bersosialisasi dan tampil di hadapan banyak orang, nafsunya yang sulit ditebak, dan jenakanya yang terkadang menyulitkan. Begitu banyak celah yang menghalanginya dalam menunjukkan potensinya kepada banyak orang. Namun dirinya berhasil menutupinya dengan menjalin relasi dan berhubungan baik dengan banyak orang. Dia sangat sulit berkomunikasi dengan lawan jenis, padahal dia sendiri bernafsu dengan wanita bertubuh kecil entah apa yang salah dengan nafsunya. Saya yang normal sulit memahaminya",
      name: "Abdul Hafidz Yazeed",
      designation: "Data and AI/ML Enthusiast",
      src: "/apis.webp",
    },
  ];
  return (
    <section id="testimonials">
      <AnimatedTestimonials autoplay testimonials={testimonials} />
    </section>
  );
}
