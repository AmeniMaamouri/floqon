import { VscCopy } from "react-icons/vsc";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const BaseTable = ({ emails }: any) => {
    return (
        <table style={{ marginTop: '60px' }}>
            <tr>
                <th>Emails</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
            </tr>

            {emails.map((email:any) => <tr>
                <td>{email}</td>
                <CopyToClipboard text={email}>
                    <td style={{ textAlign: 'center', cursor: 'pointer' }}><VscCopy size={18} /></td>
                </CopyToClipboard>
            </tr>)}


        </table>
    );
}

export default BaseTable;