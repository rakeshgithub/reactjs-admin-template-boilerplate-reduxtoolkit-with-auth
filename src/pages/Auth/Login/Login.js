import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as S from "./Login.style";
import { Row, Col } from "react-bootstrap";
import Button from "../../../components/Button";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, verifyOtp } from "../../../store/slices/auth";
import { clearMessage } from "../../../store/slices/message";
import userIcon from "././../../../assets/images/user-icon.png";

export function Login(props) {
  const [loading, setLoading] = useState(false);

  const [mobileToLogin, setMobileToLogin] = useState("");
  const [otpSentMessage, setOtpSentMessage] = useState("");

  const { auth } = useSelector((state) => state.authSlice);
  const isOtpSent = auth.otp === "sent" ? true : false;
  const isLoggedIn = auth.isLoggedIn;

  const { message } = useSelector((state) => state.messageSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // if user already "authenticated", redirect them to the app
  if (isLoggedIn) return <Navigate to={"/app"} />;

  const initialValues = {
    mobile: "",
  };

  const validationSchema = Yup.object({
    mobile: Yup.number().required("Mobile number is required!"),
  });

  const validationSchemaForOtp = Yup.object({
    otp: Yup.number().required("Enter otp received in your mobile!"),
  });

  const handleLogin = async (formValue) => {
    const { mobile } = formValue;
    setLoading(true);
    setMobileToLogin(mobile);
    console.log("HandleLogin");
    dispatch(sendOtp({ mobile }))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleOtp = async (formValue) => {
    const { otp } = formValue;

    setLoading(true);
    console.log("handleOtp");
    dispatch(verifyOtp({ mobile: mobileToLogin, otp }))
      .then(() => {
        //dispatch(clearMessage());
        setOtpSentMessage(`OTP successfully sent to ${mobileToLogin} `);
        //setIsOtpSent(true);
        setLoading(false);
        props.history.push("/app");
        window.location.reload();
        //props.history.push("/app");
        //window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <S.WelcomeContainer fluid>
      <Row>
        <Col md="5">
          <S.WelcomeCard>
            {!isOtpSent ? (
              <>
                <h1>Login</h1>

                <S.userIcon src={userIcon} rounded />

                <h2>
                  Enter the mobile number <br />
                  associated with your account
                </h2>
                <p>We will send an OTP to verify</p>

                <span>{message}</span>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleLogin}
                >
                  <Form>
                    <Row style={{ height: "70px" }}>
                      <Col md="5" className="p-0">
                        <Field
                          name="mobile"
                          type="phone"
                          className="form-control"
                          placeholder="Enter mobile number"
                        />
                        <ErrorMessage
                          name="mobile"
                          component="span"
                          className="errorText"
                        />
                      </Col>
                      <Col
                        md="1"
                        style={{
                          display: "flex",
                          justifyContent: "left",
                          alignSelf: "baseline",
                        }}
                      >
                        {!loading ? (
                          <Button type="submit">Login</Button>
                        ) : (
                          <Button type="button" disabled>
                            Wait...
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </>
            ) : (
              <>
                <h1>Enter OTP</h1>
                {otpSentMessage && <p>{otpSentMessage}</p>}
                <p>{message}</p>
                <Formik
                  initialValues={{ otp: "" }}
                  validationSchema={validationSchemaForOtp}
                  onSubmit={handleOtp}
                >
                  <Form>
                    <Row style={{ height: "70px" }}>
                      <Col md="5" className="p-0">
                        <Field
                          name="otp"
                          type="number"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="otp"
                          component="span"
                          className="errorText"
                        />
                      </Col>
                      <Col
                        md="1"
                        style={{
                          display: "flex",
                          justifyContent: "left",
                          alignSelf: "baseline",
                        }}
                      >
                        {!loading ? (
                          <Button type="submit">Verify</Button>
                        ) : (
                          <Button type="button" disabled>
                            Wait...
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </>
            )}
          </S.WelcomeCard>
        </Col>
      </Row>
    </S.WelcomeContainer>
  );
}
