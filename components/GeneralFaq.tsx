import Link from 'next/link';
import Collapsible from 'react-collapsible';

export const GeneralFaq = () => {

    return (
        <>
        <div className="FaqBlocks">
          <div className='FaqBlockAccordions'>
            <Collapsible triggerTagName="h3" trigger="What are virtual accounts?">
                <p>
                Virtual accounts are accounts that have unique account and routing numbers. These accounts enable seamless conversion between dollars and stablecoins, offering a modern solution for managing digital assets and traditional currencies.
                </p>
            </Collapsible>
            {/* <Collapsible triggerTagName="h3" trigger="What is the pricing?">
                <p>
                  Lorem ipsum
                </p>
            </Collapsible>
            <Collapsible triggerTagName="h3" trigger="How long do payouts take?">
                <p>
                Payout timing varies by location, typically granting access to your platform balance within 2 to 7 business days. In supported regions, the default payout rhythm is automated on a daily basis, ensuring your platform balance is transferred daily upon eligibility. Alternatively, you retain the choice to opt for weekly or monthly payout frequencies based on your preference.
                </p>
            </Collapsible> */}
            {/* <Collapsible triggerTagName="h3" trigger="How do refunds work?">
                <p>
                All refunds are paid out in a merchant’s local fiat currency to end customers. For any specific refund related questions please reach out to your HIFI account representative.                </p>
            </Collapsible> */}
            {/* <Collapsible triggerTagName="h3" trigger="Do I need tax reporting?">
                <p>
                HIFI complies with the requirements of Section 6050W of the Internal Revenue Code. This Section requires payment processors to provide information to the IRS through Form 1099-K reporting. This requirement <strong>only</strong> applies in the case of merchants that receive payments from HIFI Pay of more than $20,000 in gross volume and <strong>more</strong> than 200 separate payments in a single calendar year. 
                </p>
            </Collapsible>
            <Collapsible triggerTagName="h3" trigger="Is there support for New York customers?">
                <p>
                Although NYDFS categorizes assets support into Approved for Custody and Approved for Listing, HiFi will only support assets that meet both the criteria for custody and listing. As a result, there may be assets that are available for one or the other according to NYDFS, which we will not support for Participants in NY.                        
                </p>
            </Collapsible> */}
          </div>
        </div>

        </>
    );
};