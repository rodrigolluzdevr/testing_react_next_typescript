import Card from "@/components/Card"

const products = [
    {
      product: 'Mouse',
      value: 29.90,
      descount: 0,
      state: true
    },
    {
      product: 'keyboard',
      value: 69.90,
      descount: 10,
      state: true
    },
    {
      product: 'CPU',
      value: 2599.90,
      descount: 500,
      state: true
    },
    {
      product: 'WaterCooler',
      value: 229.90,
      descount: 50,
      state: true
    }
]

function VerifyDesc(n1: number, n2: number) {
    const verify = n1 - n2
    const verify2 = n1 - n2/2
    if (verify > 1000) {
      return verify
    } else {
      return verify2
    }
}

export default function ProductsPage() {
    return (
        <div className='flex justify-center gap-3'>
        {
          products.map((e: any) => {
            if (e.state) {
            return (
              <Card product={e.product} value={e.value} descount={e.descount} funct={VerifyDesc}/>
            )}
          })
        }
      </div>
    )
}