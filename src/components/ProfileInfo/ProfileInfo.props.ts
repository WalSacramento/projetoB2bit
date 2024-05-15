import { User } from "../../store/user/User.props";

export interface ProfileInfoProps {
  isLoading: boolean;
  user: User | null;
}