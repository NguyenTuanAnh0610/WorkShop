
import { useQuery } from '@tanstack/react-query';
import {Image, Skeleton, Table} from 'antd';
import type { TableProps } from 'antd';
import axios from 'axios';

interface DataType {
  key: string; 
  name: string;
  price: number;
  in_stock: boolean;
  image: string;
  description:string;
}


const AdminProductPage = () => {

const {data, isLoading } = useQuery({
  queryKey:["products"],
  queryFn: async() =>{
    const response = await axios.get(`http://localhost:3000/api/products`)
    return response.data.map((product:any) =>({
        key:product.key || product.id,
        ...product,
    
    }))
  }
})

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Ảnh',
      key: 'image',
      dataIndex: 'image',
      render:(_,item:any) =>{
        return <Image width={50} src={item.image}/>
      }

    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Tình trạng',
      dataIndex: 'in_stock',
      key: 'in_stock',
    },
    {
      title: 'Mô tả',
      key: 'description',
      dataIndex: 'description',
    },
    
    {
      title: 'Action',
      key: 'action',
    },
  ];
  
 
  
   return (
    <>
    <Skeleton loading={isLoading}>
    <Table<DataType> columns={columns} dataSource={data} />;
    </Skeleton>
    </>
   )
}

export default AdminProductPage;