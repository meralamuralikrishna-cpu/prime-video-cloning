import React from "react";
import Home from "./nav-left/Home";
import Free from "./nav-left/Free";
import Movies from "./nav-left/Movies";
import Tvshows from "./nav-left/Tvshows";
import Livetv from "./nav-left/Livetv";
import Subscription from "./nav-left/Subscription";
import Button from "./nav-right/Button";
import Geners from "./nav-right/Geners";
import Language from "./nav-right/Language";
import Profile from "./nav-right/Profile";
import SearchIcon from "./nav-right/SearchIcon";

const primeLogo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAA+CAMAAABtETKdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////1fUNLcAAAAWdFJOUwDvEJ8ggL/fQGBwz5CgMK9Qj3+wb1/e5RdTAAAHK0lEQVR42u2b2XrbKhCAxb7Jkpy0ev9HPV7FbMhpUrvyd8RdYswMPwOzgLvuZ00fw6x86rbSdB69z7Z7lzao+dI+NqKPDRd1wvAuAK/6nlraEr95Vm0bnMK1lS1ATnd+c9kEwKpP3+xzuHdxG1B4UWae9RYA+kWd8B4AxwpwE+d2WdRRuwX+DOCbWGBcFPabOAPdoo95D4B1yadteGH1+ETZFsB73JA3ElYl9VCfbQE8qexL6bcT+dvDKTMaY/c+AN+uPR2gtvq5gz0Y39r3Aqjjpd20juZ8qKkxrfSZxlMf5ZOtn8T7nhlgT3u8DAZLDfrjEutevyxVAi5najFyZmgjUuT2pQGooO21aTysV1VoC+BNuPLH1gEQj5dxyoi0v3kBdRZpQSRvBV977jMEmL0tXvgq1MKg5hcf7NfiJQNHZE2NKqXPQdAUpXS8B38oQJAIlQEO/oHwLsIepuIBOlU2xJGFWjH4PaPQjxQTIgirj3Cw35ePISFWwKnzFJbwaiNSpmuRwkJidCRCRYAfWPZs6DGjR9xBZQow11IGmjQE2INAC684BRipSgPlR0INTT486xibqS4I2yckggM8UqECQO2ZcLJ8lM2pHQlA09E+aqAAPeoTVwBmSxXSbJVRyYlPASpwa1nIdHuUvDGAXCgHqIsgHBEU+C3JTt33rEehABXqo1cAGmZQzrLxgR0dZ6nRql5E1kbIGwmgIHRkAI0o3D/gd7fBqi3vkeg5raiAFkABhqCE5nW85iQuTfHtP6NkkgI0bYUWgB8PPm+PgkVeZjka5I0oQNj6PwO4piJY4ZJjzGFuFLoPrFYQ8WoQgNAAVfFFkg76nIRPB27/YHnHlIB2F1+PmGhir5EDVH3Kh3DHvwbQ59QT9Kd/ucANrK7wgQANjYpzYMei7wSAZmVud4CG+PZBUV9ftRlIzcdhgLcRdaDnZCB6nEiNRa8DDJGfz4nIV7SGElhsEhuBjKYl3SwBDGxuhU63ihqZq9LEACN1XOcewoET6QxDs8zWBnjbfFrxHevJNBP3DYfGKehp+SzgyeGRI6+vDlQdxyMfjxclsMnXSTkIMAoxxUAA2q8C9LzGqfgCTa3wLs5CSgHXviemGjoBYC+cpZ4A5HjIsSDlPzB2korgaW6sge++CjBzWp98Iyb8Zxb8bZQDGU/C6E8JoBcuHCIGOMy8JGzR6vUCoAjkSLvTkn+G5mVhE2CUUy3pW5N04HkxX6lgFTGFJAFUwsJrDDBLlzpo9TwzALzmYmal8JdCYzYrAHmyDfDgb9VNLu1V0zgEB/ynFQCKuXMV7pATKtJFRYJDOmkQ04n+rmCzbb8/aALsvg5wmYMytZXGjX2WvW7pBICDaBw4E1lWILjaCgA/iDEp4C5kR8AJvgKgXw22SSRokWVGamIIYBTnjnPhsCrctGpoAJDoYA8YxHMBrs9BNSQGZI9xHWCUrj4dS8RY+5SiQAJo6wBnIrGHh/5IKaPZTD8G6FsA3fsCjDDsCNTLotmkHaCwhTU49izTq7GFp78NUNrCgxQsvMKJLD5POaFNrbK0B3t06L7rRGoaboQ2tFZBciKTFMaUV4Yx4UvXiLmaZs++iABaMYzxshduPe6x4iqA7FMUMjcC6acA7P/shVesjDwLthuBtJGMw31t9ZQUjYN/zkKmMpAQ/rkAk3iKtJtavqzY5sEnehCicdtK5Vri/Go+mLpZqHtksq+fC1Dcael8fz2sPi0wA7dcDHAUbDthgGKseJz9cdLU6ShpEFBMkJJ9Wpd8CkBxja9zF39Acdc+ZP41rHgW8lhSzqqlPUNnVcYJb8fIMzkP/XjQjG/oXgHQrdVw+Lm47J/ADbdVUF2sZ6IFVeEEjnjn8/VFjoVfdNZLgfu5+WSA1QqKprckZe1U4puPbB1F6/XwUsRJ9UF0pWEI88wuSUgkeb7H0B+KvRx/MkBgguUiUR/ntd+f9O1yA9HcgRu389yScKnkiSxNbxzAy+tMOuQHobjvXgMQXpyM7jiq9bfiUXwhIAHUazfTjo322TtnFBsYXpWZ6wst6TGEcLFuXwQQnPaNq/1GaMb6UNV7PmShW7ZvJZG2e9DD4pt91Xj88QKALRUbbyBHcZklgJpNKkQ2eJGFV9+ky4p2dX6Zvwd6GUD4i5OZXLO3sznuZhjViVmNZgDlpy/u0eMix+bXt54nvQAgPO+bV1g8jKC9uFk6NuvACNnyyPiFHlmYHyRYbPdSgF0iq6xWfqoQ5CBGfGDp6KwPAiLHNjoV6VodkCLLJJTTQvLEf0RKPtGBJweeW/RSUMG5GkSIFVjZw14u+INv14fLfgCrrFChzB7UA+H2IHcgKzn13o99+ke/fBuy8Sf5Jv/d3/LG3odQ+rj+2v409XLqZnKrn03nHmV0stHHbm/faTvAHeAOcAe4A9wB7gB3gDvA/2dTO8CfNZuubef3vfYfScdFGDdPwIgAAAAASUVORK5CYII=";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-[#0f171e]/70 backdrop-blur-md border-b border-white/5 text-white">
      <div className="flex items-center gap-6">
        <img
          src={primeLogo} alt="Prime Video" className="h-6 w-auto object-contain cursor-pointer"
        />
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li><Home /></li>
          <li><Free /></li>
          <li><Movies /></li>
          <li><Tvshows /></li>
          <li><Livetv /></li>
          <li><Subscription /></li>
        </ul>
      </div>

      <div>
        <ul className="flex items-center gap-4">
          <li><SearchIcon /></li>
          <li><Language /></li>
          <li><Geners /></li>
          <li><Profile /></li>
          <li><Button /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
