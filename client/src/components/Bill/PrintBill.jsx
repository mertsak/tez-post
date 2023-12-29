import { Modal, Button } from "antd";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";

const PrintBill = ({ isModalOpen, handleOk, handleCancel, printModalData }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Modal
      width={900}
      title="Print Bill"
      open={isModalOpen}
      onOk={handleOk}
      footer={false}
      onCancel={handleCancel}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <section className="py-20 bg-black" ref={componentRef}>
        <div className="max-w-5xl mx-auto bg-white px-4 sm:px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Bill Detail:</p>
                  <p>Table Number - {printModalData?.tableNumber}</p>
                </div>

                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Bill:</p>
                  The Boring Company
                  <p> Tesla Street 007</p>
                  <p> Frisco </p>
                  <p> CA 0000</p>
                </div>

                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Bill Number:</p>

                    <p>
                      000
                      <span>{Math.floor(Math.random() * 100)}</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">
                      Date of issue:
                    </p>
                    <p>
                      {new Date(printModalData?.createdAt).toLocaleDateString(
                        "tr-TR"
                      )}
                    </p>
                  </div>
                </div>

                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Conditions:</p>
                    <p>10 day</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Maturity:</p>
                    <p>
                      {new Date(printModalData?.createdAt).toLocaleDateString(
                        "tr-TR"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell invisible sm:visible"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 sm:table-cell invisible sm:visible"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell invisible sm:visible"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell invisible sm:visible"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {printModalData?.cartItems?.map((item) => (
                    <tr className="border-b border-slate-200" key={item._id}>
                      <td className="py-4 ">
                        <img
                          src={item.img}
                          alt=""
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </td>
                      <td className="py-4">
                        <span className="font-medium">{item.title}</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>{item.price}₺</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>{item.quantity}</span>
                      </td>
                      <td className="py-4 text-end">
                        <span>{item.price * item.quantity}₺</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-bold text-slate-700">
                        Subtotal :
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-bold text-slate-700">Subtotal :</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">
                        {(
                          printModalData?.subTotal -
                          printModalData?.subTotal * printModalData?.tax
                        ).toFixed(2)}
                        $
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-bold text-slate-700">
                        VAT total %8 :
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-bold text-slate-700">VAT total %8 :</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-bold text-red-600">
                        +
                        {(
                          printModalData?.subTotal * printModalData?.tax
                        ).toFixed(2)}
                        $
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-bold text-slate-700">
                        Grand total :
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-bold text-slate-700">Grand total :</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">
                        {printModalData?.subTotal.toFixed(2)}$
                      </span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Payment terms are 14 days. Pass on Unpackaged Debts
                    According to the Payment Act 0000, freelancers are entitled
                    to 00.00 late fee if debts are not paid after that they have
                    the right to demand and at this point Please note that a new
                    invoice will be presented additionally. If the revised
                    invoice is not paid within 14 days, the due date additional
                    interest on past account and 8% legal rate plus 0.5% Bank of
                    A total of 8.5% will be applied, including the England base.
                    Parties cannot make a contract outside the provisions of the
                    Law.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="flex justify-end mt-4">
        <Button onClick={handlePrint} type="primary" size="large">
          Print
        </Button>
      </div>
    </Modal>
  );
};

export default PrintBill;
