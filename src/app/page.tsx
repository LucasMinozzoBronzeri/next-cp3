import Image from "next/image";
import CardFilm from "./componentes/CardFilm";

export default function Home() {
  return (
    <>
    <main className="flex flex-auto w-full items-center justify-center">
      <div className="flex flex-row flex-wrap align justify-center align items-center">

        <CardFilm
            title="Barcelona x PSG"
            image="img/fa82ef29866b036cbc2674e33bb7c19b0fa5f564.webp"
            link="https://www.youtube.com/watch?v=NtkZVru6_No"
          />
          <CardFilm
            title="Ludogorets x Özil"
            image="img/39F7403000000578-4042636-image-a-35_1481933105913.webp"
            link="https://www.youtube.com/watch?v=3EufYsRMnjg"
          />

          <CardFilm
            title="Barcelona x Juventus"
            image="img/barcelona_champions_reu.webp"
            link="https://www.youtube.com/watch?v=Tvdihk3F9Rw"
          />
          <CardFilm
            title="Barcelona x Bayern"
            image="img/tag_reuters.com0000_binary_mt1aci13727390-baseimage_1.webp"
            link="https://www.youtube.com/watch?v=YAc3W_k6soQ&t=259s"
          />
          <CardFilm
            title="Barcelona x Chelsea"
            image="img/gettyimages-661112310-1.webp"
            link="https://www.youtube.com/watch?v=NnBV3kesjbQ"
          />

          <CardFilm
            title="Barcelona x Manchester United"
            image="img/Barcelona_3x1_Manchester_United.jpg"
            link="https://www.youtube.com/watch?v=nGa5Xq2nk6s"
          />


      </div>
    </main>
    </>
  );
}
