import { VscCopy } from "react-icons/vsc";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const BaseTable = () => {
    return (
        <table style={{ marginTop: '60px' }}>
            <tr>
                <th>Emails</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
            </tr>

            <tr>
                <td>Alfreds Futterkiste</td>
                <CopyToClipboard text={"Alfreds Futterkiste"}>
                    <td style={{ textAlign: 'center', cursor: 'pointer' }}><VscCopy size={18} /></td>
                </CopyToClipboard>
            </tr>

            <tr>
                <td>Centro comercial Moctezuma</td>
                <td style={{ textAlign: 'center', cursor: 'pointer' }}><VscCopy size={18} /></td>
            </tr>


        </table>
    );
}

export default BaseTable;