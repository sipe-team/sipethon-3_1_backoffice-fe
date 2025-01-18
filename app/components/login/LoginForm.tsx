import React, { useState } from 'react';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { useNavigate } from 'react-router';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: 인증 로직
    const isAuthenticated = true;
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="mt-12 space-y-4">
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm">
            아이디
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="text-sm">
            비밀번호
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button className="w-full mt-12" type="submit">
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
