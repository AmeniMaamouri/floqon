import AuthLayout from "@/components/layout";
import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from "react-icons/fa";
const BaseTable = dynamic(() => import("@/components/baseTable/BaseTable"), { ssr: false });

const Admin = () => {
    const [emails, setEmail] = useState<string[]>([])
    const [listEmailsSeperatedByCommas, setListEmailsSeperatedByCommas] = useState("")

    const fetchEmails = async () => {
        try {
            const res:any = await axios(`http://floqon.com:3000/api/emails`, {
                method: 'GET',
            })
            setEmail(res.data.emails)
            /* seperated emails by commas */
            const str2 = res.data.emails.join(', ');
            setListEmailsSeperatedByCommas(str2)

        } catch (error: any) {
            console.log(error)
        }
    }


    useEffect(() => {
        /* Api heere fetch */
        fetchEmails()

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
                     {emails?.length !== 0 && <BaseTable emails={emails} />}
                </div>
            </AuthLayout>
        </div>
    );
}

export default Admin;