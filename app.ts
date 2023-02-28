interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  SUCCESS = "success",
  FAILED = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}
interface IResponseSuccess {
  status: PaymentStatus.SUCCESS;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.FAILED;
  data: IDataFailed;
}

async function getFaqs(
  req: IPaymentRequest
): Promise<IResponseSuccess | IResponseFailed[]> {
  const res = await fetch("/faqs", {
    method: "POST",
    body: JSON.stringify(req),
  });

  const data = await res.json();
  return data;
}
