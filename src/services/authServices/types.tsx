export type LoginRequestPayload = {
  email: string;
  password: string;
};

export type LoginSuccessPayload = {
  status: number;
  data: {
    message: string;
    userInfo: Record<string, any>;
  };
};

export type RegisterRequestPayload = {
  username: string;
  email: string;
  password: string;
};

export type RegisterSuccessPayload = {
  status: number;
  data: {
    message: string;
  };
};
