"use client";

import { Email, CheckGreen, AlertRed } from "@/components/icons/ready-to-use";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";

import React from "react";
import { useForgotPasswordHelper } from "./ForgotPassword.helper";

export const ForgotPasswordForm = () => {
  const {
    handleRecoverPassword,
    handleSubmit,
    register,
    trigger,
    dirtyFields,
    errors,
    isValid,
  } = useForgotPasswordHelper();

  const emailRegister = register("email");
  const { onBlur, ...emailProps } = emailRegister;

  return (
    <div>
      <form>
        <Stack className="mb-9">
          <InputGroup className="flex items-center">
            <InputLeftElement pointerEvents="none">
              <Email width="24" height="18" viewBox="0 0 24 18" />
            </InputLeftElement>
            <Input
              id="email"
              type="email"
              placeholder="O seu email"
              onBlur={(e) => {
                onBlur(e);
                trigger("email");
              }}
              {...emailProps}
              className={`${
                dirtyFields.email && !errors.email
                  ? "border-green"
                  : "border-black"
              } ${errors.email && "border-red-600"}`}
            />
            {dirtyFields.email && !errors.email && (
              <InputRightElement>
                <CheckGreen />
              </InputRightElement>
            )}
            {errors.email && (
              <InputRightElement>
                <AlertRed />
              </InputRightElement>
            )}
          </InputGroup>
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </Stack>

        <div className="flex items-center justify-between text-xs">
          <button className="py-3 px-5 bg-lightPurple text-purple rounded-4xl">
            Cancelar
          </button>
          <button className="py-3 px-5 bg-purple text-white rounded-4xl">
            Pedir password
          </button>
        </div>
      </form>
    </div>
  );
};