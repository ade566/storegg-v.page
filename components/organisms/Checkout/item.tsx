import Image from 'next/image';

export default function CheckoutItem() {
  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <Image src="/img/Thumbnail-3.png" width={200} height={271} className="img-fluid" alt="" />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          Mobile Legends:
          <br />
          The New Battle 2021
        </p>
        <p className="color-palette-2 m-0">Category: Mobile</p>
      </div>
    </div>
  )
}
