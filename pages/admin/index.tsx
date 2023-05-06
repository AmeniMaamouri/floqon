import AuthLayout from "@/components/layout";
import { useEffect, useState } from "react";
import { VscCopy } from "react-icons/vsc";
import { FaCopy } from "react-icons/fa";
import dynamic from "next/dynamic";
const BaseTable = dynamic(() => import("@/components/baseTable/BaseTable"), { ssr: false });
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Admin = () => {
    const [emails, setEmail] = useState<string[]>(["a@sd.df", "b@ds.df"])
    const [listEmailsSeperatedByCommas, setListEmailsSeperatedByCommas] = useState("s")

    useEffect(() => {
        /* Api heere fetch */

        /* seperated emails by commas */
        const str2 = emails.join(', ');
        setListEmailsSeperatedByCommas(str2)
        console.log('str2', str2)
    }, [])

    return (
        <div>
            <AuthLayout>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 style={{ alignSelf: 'center', textAlign: 'center', paddingTop: '30px', fontSize: '30px', marginBottom: '40px' }}>Newsletter</h1>

                        {listEmailsSeperatedByCommas && <CopyToClipboard text={listEmailsSeperatedByCommas}>
                            <div style={{ alignSelf: 'end', marginTop: '-72px', textAlign: "center", cursor: 'pointer' }}>
                                <FaCopy size={25} style={{ color: 'green', cursor: 'pointer' }} />
                                <p>Copy all</p>
                            </div>
                        </CopyToClipboard>}

                    </div>
                    <BaseTable />
                </div>
            </AuthLayout>
        </div>
    );
}

export default Admin;