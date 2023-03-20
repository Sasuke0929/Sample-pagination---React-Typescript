import React from 'react';

import Table from '../components/table';
import Button from '../components/button';

import { requestData, controlDataNumber } from '../actions';

const Index =  () => {

    const {Tr, Td, Th} = Table;

    const [pagenum, Setpagenum] = React.useState(0);
    const [datas, SetData] = React.useState([]);

    React.useEffect( () => {
        (async()=>{
            const _result = await requestData(pagenum);
            const _returned_result = await controlDataNumber(_result);
            SetData(_returned_result);
        })()
    }, [pagenum]);

    return(
        <>
            <Table>
                <thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>JobTitle</Th>
                        <Th>EmailAddress</Th>
                        <Th>FirstNameLastName</Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                        <Th>Company</Th>
                    </Tr>
                </thead>
                <tbody>
                    {datas.map(item => 
                        <Tr key={item["ID"]}>
                            <Td>{item["ID"]}</Td>
                            <Td>{item["JobTitle"]}</Td>
                            <Td>{item["EmailAddress"]}</Td>
                            <Td>{item["FirstNameLastName"]}</Td>
                            <Td>{item["Email"]}</Td>
                            <Td>{item["Phone"]}</Td>
                            <Td>{item["Company"]}</Td>
                        </Tr>
                    )}
                </tbody>
            </Table>

            <Button onClick={() => Setpagenum(pagenum + 10)}>Next</Button>
            <Button onClick={() => pagenum === 0 ? Setpagenum(0): Setpagenum(pagenum - 10)}>Prev</Button>
        </>
    )
}

export default Index;